import numeral from 'numeral'
import moment from 'moment'
import 'moment/locale/es'
import 'numeral/locales/es'

moment.locale('es')
numeral.locale('es')

global.numeral = numeral
global.moment = moment
