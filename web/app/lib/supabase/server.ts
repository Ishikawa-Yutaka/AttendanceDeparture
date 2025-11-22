/**
 * Supabaseクライアント設定ファイル（サーバー用）
 *
 * このファイルはサーバーサイド（Server Components、API Routes、Server Actions）で
 * Supabaseに接続するための設定を行います。
 *
 * サーバーサイドでは、ユーザーの認証状態をCookieから読み取る必要があるため、
 * ブラウザ用とは異なる設定が必要です。
 *
 * 使用例:
 * import { createClient } from '@/app/lib/supabase/server';
 * const supabase = await createClient();
 */

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * サーバー用Supabaseクライアントを作成する関数
 *
 * Next.jsのServer ComponentsやServer Actionsで使用します。
 * Cookieを通じてユーザーのセッション情報を管理します。
 *
 * @returns Supabaseクライアントインスタンス（Promise）
 */
export async function createClient() {
  // Next.jsのcookies()関数を使用してCookieストアを取得
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        /**
         * Cookieを取得する関数
         * Supabaseがセッション情報を読み取る際に使用
         */
        getAll() {
          return cookieStore.getAll();
        },
        /**
         * Cookieを設定する関数
         * Supabaseがセッション情報を保存する際に使用
         *
         * 注意: Server Componentsでは直接Cookieを設定できないため、
         * try-catchで囲んでいます。Middleware経由で設定される場合があります。
         */
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Componentからの呼び出し時はCookie設定ができない場合がある
            // この場合はMiddlewareがセッションのリフレッシュを処理する
          }
        },
      },
    }
  );
}
