import {selectors as elcards} from './selectors'
import { selectors as el } from '../Dashboard/selectors';

export const findIssueCard = (columnId, card ) => {
    return cy.jget(el.body(columnId))
    .find(elcards.draggable_wrapper)
    .find(elcards.card_body)
    .contains(card)   
}