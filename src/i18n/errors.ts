import { defaultLang, type SupportedLang } from './ui';

export interface ErrorContent {
  notFound: {
    title: string;
    description: string;
    heading: string;
    message: string;
    home: string;
  };
  serverError: {
    title: string;
    description: string;
    heading: string;
    message: string;
    home: string;
  };
}

export const errorContent: Record<SupportedLang, ErrorContent> = {
  en: {
    notFound: { title: 'Page Not Found | Fix The Speaker', description: 'The page you were looking for does not exist. Return to the free phone speaker cleaner and water eject tool.', heading: 'Page not found', message: 'That link is broken or the page has moved. The speaker cleaner is still right where you left it.', home: 'Back to home' },
    serverError: { title: 'Something Went Wrong | Fix The Speaker', description: 'An unexpected error occurred while loading Fix The Speaker. Try again or return to the free phone speaker cleaner.', heading: 'Something went wrong', message: 'The server hit an unexpected error. Refresh the page in a moment, or head back to the tool.', home: 'Back to home' },
  },
  es: {
    notFound: { title: 'Página no encontrada | Fix The Speaker', description: 'La página que buscas no existe.', heading: 'Página no encontrada', message: 'El enlace está roto o la página se ha movido. El limpiador de altavoces sigue disponible.', home: 'Volver al inicio' },
    serverError: { title: 'Algo salió mal | Fix The Speaker', description: 'Se produjo un error inesperado al cargar Fix The Speaker.', heading: 'Algo salió mal', message: 'El servidor encontró un error inesperado. Actualiza la página o vuelve a la herramienta.', home: 'Volver al inicio' },
  },
  ja: {
    notFound: { title: 'ページが見つかりません | Fix The Speaker', description: 'お探しのページは存在しません。', heading: 'ページが見つかりません', message: 'リンクが無効か、ページが移動しました。スピーカークリーナーは引き続きご利用いただけます。', home: 'ホームに戻る' },
    serverError: { title: 'エラーが発生しました | Fix The Speaker', description: 'Fix The Speaker の読み込み中に予期しないエラーが発生しました。', heading: 'エラーが発生しました', message: 'サーバーで予期しないエラーが発生しました。しばらくしてから再読み込みするか、ツールに戻ってください。', home: 'ホームに戻る' },
  },
  fr: {
    notFound: { title: 'Page introuvable | Fix The Speaker', description: 'La page demandée n’existe pas.', heading: 'Page introuvable', message: 'Ce lien est cassé ou la page a été déplacée. Le nettoyeur de haut-parleur reste disponible.', home: 'Retour à l’accueil' },
    serverError: { title: 'Un problème est survenu | Fix The Speaker', description: 'Une erreur inattendue est survenue lors du chargement de Fix The Speaker.', heading: 'Un problème est survenu', message: 'Le serveur a rencontré une erreur inattendue. Actualisez la page ou revenez à l’outil.', home: 'Retour à l’accueil' },
  },
  de: {
    notFound: { title: 'Seite nicht gefunden | Fix The Speaker', description: 'Die gesuchte Seite existiert nicht.', heading: 'Seite nicht gefunden', message: 'Dieser Link ist ungültig oder die Seite wurde verschoben. Der Lautsprecherreiniger ist weiterhin verfügbar.', home: 'Zur Startseite' },
    serverError: { title: 'Etwas ist schiefgelaufen | Fix The Speaker', description: 'Beim Laden von Fix The Speaker ist ein unerwarteter Fehler aufgetreten.', heading: 'Etwas ist schiefgelaufen', message: 'Der Server ist auf einen unerwarteten Fehler gestoßen. Laden Sie die Seite neu oder kehren Sie zum Tool zurück.', home: 'Zur Startseite' },
  },
  pt: {
    notFound: { title: 'Página não encontrada | Fix The Speaker', description: 'A página que você procura não existe.', heading: 'Página não encontrada', message: 'Este link está quebrado ou a página foi movida. O limpador de alto-falante continua disponível.', home: 'Voltar ao início' },
    serverError: { title: 'Algo deu errado | Fix The Speaker', description: 'Ocorreu um erro inesperado ao carregar o Fix The Speaker.', heading: 'Algo deu errado', message: 'O servidor encontrou um erro inesperado. Atualize a página ou volte para a ferramenta.', home: 'Voltar ao início' },
  },
  ko: {
    notFound: { title: '페이지를 찾을 수 없습니다 | Fix The Speaker', description: '찾으시는 페이지가 존재하지 않습니다.', heading: '페이지를 찾을 수 없습니다', message: '링크가 잘못되었거나 페이지가 이동했습니다. 스피커 클리너는 계속 이용하실 수 있습니다.', home: '홈으로 돌아가기' },
    serverError: { title: '문제가 발생했습니다 | Fix The Speaker', description: 'Fix The Speaker를 불러오는 중 예기치 않은 오류가 발생했습니다.', heading: '문제가 발생했습니다', message: '서버에서 예기치 않은 오류가 발생했습니다. 잠시 후 새로고침하거나 도구로 돌아가세요.', home: '홈으로 돌아가기' },
  },
  it: {
    notFound: { title: 'Pagina non trovata | Fix The Speaker', description: 'La pagina cercata non esiste.', heading: 'Pagina non trovata', message: 'Il link non è valido oppure la pagina è stata spostata. Il pulitore dell’altoparlante è ancora disponibile.', home: 'Torna alla home' },
    serverError: { title: 'Qualcosa è andato storto | Fix The Speaker', description: 'Si è verificato un errore imprevisto durante il caricamento di Fix The Speaker.', heading: 'Qualcosa è andato storto', message: 'Il server ha riscontrato un errore imprevisto. Aggiorna la pagina o torna allo strumento.', home: 'Torna alla home' },
  },
};

export function getErrorContent(lang: SupportedLang, kind: keyof ErrorContent) {
  return errorContent[lang]?.[kind] ?? errorContent[defaultLang][kind];
}
