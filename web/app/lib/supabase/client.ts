/**
 * Supabaseクライアント設定ファイル（ブラウザ用）
 *
 * このファイルはクライアントサイド（ブラウザ）でSupabaseに接続するための
 * 設定を行います。主にReactコンポーネント内で使用します。
 *
 * 使用例:
 * import { createClient } from '@/app/lib/supabase/client';
 * const supabase = createClient();
 */

import { createBrowserClient } from "@supabase/ssr";

/**
 * ブラウザ用Supabaseクライアントを作成する関数
 *
 * この関数を呼び出すたびに新しいクライアントインスタンスが作成されます。
 * Reactコンポーネント内では、useStateやuseMemoと組み合わせて使用することを
 * 推奨します。
 *
 * @returns Supabaseクライアントインスタンス
 */
export function createClient() {
  // 環境変数からSupabaseの接続情報を取得
  // NEXT_PUBLIC_ プレフィックスが付いた環境変数はブラウザからアクセス可能
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
