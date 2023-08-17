// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';

// eslint-disable-next-line import/prefer-default-export
export function dateToString(date) {
  if (!date) { return (''); }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

export function translateErrors(code) {
  const error = { title: 'エラー', description: '時間をおいてお試し下さい' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'メールアドレスが無効です';
      break;
    case 'auth/wrong-password':
      error.description = 'パスワードが違います';
      break;
    case 'auth/user-not-found':
      error.description = '登録ユーザーが見つかりません';
      break;
    case 'auth/email-already-in-use':
      error.description = '既にメールアドレスが使用されています';
      break;
    case 'auth/credential-already-in-use':
      error.description = '既にユーザーが登録されています';
      break;
    default:
  }
  return error.description;
}
