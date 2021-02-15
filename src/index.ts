import { stat } from 'fs';
import plays from './plays.json'
import invoices from './invoices.json'

import statement from './statement';

const invoice = invoices[0]

console.log(statement(invoice, plays))