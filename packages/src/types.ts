/**
 * 共有型定義
 * モバイルアプリと管理画面で共通で使用する型定義
 */

// 従業員
export interface Employee {
  id: string;
  name: string;
  email: string;
  department?: string;
  role: 'employee' | 'manager' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// 勤怠記録
export interface Attendance {
  id: string;
  employeeId: string;
  date: Date;
  clockIn?: Date;
  clockOut?: Date;
  location?: {
    latitude: number;
    longitude: number;
  };
  actualWorkHours?: number; // 実労働時間（分）
  overtimeHours?: number; // 時間外労働時間（分）
  nightWorkHours?: number; // 深夜労働時間（分）
  holidayWorkHours?: number; // 休日労働時間（分）
  createdAt: Date;
  updatedAt: Date;
}

// 休憩記録
export interface Break {
  id: string;
  attendanceId: string;
  startTime: Date;
  endTime?: Date;
  duration?: number; // 休憩時間（分）
  createdAt: Date;
  updatedAt: Date;
}

// 申請
export interface Request {
  id: string;
  employeeId: string;
  type: 'attendance_correction' | 'paid_leave' | 'other_leave';
  status: 'pending' | 'approved' | 'rejected';
  date?: Date;
  reason: string;
  createdAt: Date;
  updatedAt: Date;
}

// 承認履歴
export interface Approval {
  id: string;
  requestId: string;
  approverId: string;
  status: 'approved' | 'rejected';
  comment?: string;
  createdAt: Date;
}

// 年次有給休暇
export interface PaidLeave {
  id: string;
  employeeId: string;
  year: number;
  grantedDays: number; // 付与日数
  usedDays: number; // 使用日数
  remainingDays: number; // 残日数
  createdAt: Date;
  updatedAt: Date;
}

