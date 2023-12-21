import {
  BookIcon, TranslateIcon, YoutubeIcon,
} from '../../../../icons';
import st from './styles.module.scss';

export default function Links({ word }) {
  const openDictionary = () => {
    window.open(`https://dictionary.cambridge.org/dictionary/english/${word}`, '_blank', 'noreferrer');
  };

  const openTranslate = () => {
    window.open(`https://translate.google.com/details?sl=en&tl=uk&text=${word}&op=translate`, '_blank', 'noreferrer');
  };

  const openYouGlish = () => {
    window.open(`https://youglish.com/pronounce/${word}/english?`, '_blank', 'noreferrer');
  };

  return (
    <div className={st.linkContainer}>
      <TranslateIcon className={st.icon} onClick={openTranslate} />
      <BookIcon className={st.icon} onClick={openDictionary} />
      <YoutubeIcon className={st.icon} onClick={openYouGlish} />
    </div>
  );
}
