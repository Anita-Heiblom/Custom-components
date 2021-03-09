import * as Core from '@material-ui/core';
import * as Lab from '@material-ui/lab';
import * as Pickers from '@material-ui/pickers';
import * as Styles from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import enLocale from 'date-fns/locale/en-US';
import nlLocale from 'date-fns/locale/nl';
import InnerImageZoom from 'react-inner-image-zoom';
import css from 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import FullCalendar from '@fullcalendar/react';
import SignaturePad from 'react-signature-pad-wrapper';

import Icons from './icons';

window.css = css;

window.InnerImageZoom = InnerImageZoom;

window.FullCalendar = FullCalendar;

window.SignaturePad = SignaturePad;

export default {
	Core,
	Icons,
	Lab,
	Pickers,
	Styles,
	DateFnsUtils,
	DateLocales: { enLocale, nlLocale },
};
