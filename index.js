import glamorous from 'glamorous';
import {Col as GridCol, Container, Row as GridRow} from 'glamorous-grid';

const HEADER_HEIGHT = '3.5em';
const USABLE_VIEWPORT_HEIGHT = `calc(100vh - ${HEADER_HEIGHT})`;

export const PageContainer = glamorous(Container)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: USABLE_VIEWPORT_HEIGHT,
});

export const stylePageContainer = glamorous(PageContainer);

export const Row = GridRow;
export const styleRow = glamorous(GridRow);

export const RowGrow = glamorous(GridRow)({flexGrow: 1});
export const styleRowGrow = glamorous(RowGrow);

export const Col = GridCol;
export const styleCol = glamorous(GridCol);
