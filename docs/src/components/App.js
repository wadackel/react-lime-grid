import React from 'react';
import { PrismCode } from 'react-prism'; // eslint-disable-line import/no-extraneous-dependencies
import Box from './Box';
import Table from './Table';
import { Container, Row, Col } from '../../../src/';

const App = () => (
  <div>
    <header>
      <Container>
        <h1><img src="./images/logo.svg" width="80" height="80" alt="React LIME GRID" /></h1>
        <p><a href="https://github.com/tsuyoshiwada/lime-grid.css">lime-grid.css</a> For React.js</p>

        <div>
          <a className="github-button" href="https://github.com/tsuyoshiwada/react-lime-grid" data-show-count="true" aria-label="Star tsuyoshiwada/react-lime-grid on GitHub">Star</a>
          <a className="github-button" href="https://github.com/tsuyoshiwada/react-lime-grid/fork" data-show-count="true" aria-label="Fork tsuyoshiwada/react-lime-grid on GitHub">Fork</a>
          <a className="github-button" href="https://github.com/tsuyoshiwada/react-lime-grid/archive/master.zip" aria-label="Download tsuyoshiwada/react-lime-grid on GitHub">Download</a>
        </div>
      </Container>
    </header>

    <section>
      <Container>
        <h2>The Grid</h2>
        <p>
          React LIME GRID is a 12-column fluid grid. inspired by <a href="https://github.com/kristoferjoseph/flexboxgrid">flexboxgrid</a>.<br />
          You can apply different gutter widths from mobile to large desktop.<br />
          The goal is to improve the quality of UI with each optimized design.
        </p>

        <Row>
          <Col xs={3}><Box /></Col>
          <Col xs={3}><Box /></Col>
          <Col xs={3}><Box /></Col>
          <Col xs={3}><Box /></Col>
        </Row>

        <Row>
          <Col xs={4}><Box /></Col>
          <Col xs={4}><Box /></Col>
          <Col xs={4}><Box /></Col>
        </Row>

        <Row>
          <Col xs={6}><Box /></Col>
          <Col xs={6}><Box /></Col>
        </Row>

        <Row>
          <Col xs={12}><Box /></Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Grid Options</h2>
        <p>Please check the table below for how it works at each breakpoint.</p>
        <Table>
          <table style={{ minWidth: 600 }}>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Extra Small (xs)<br />&lt;576px</th>
                <th>Small (sm)<br />&gt;=576px</th>
                <th>Medium (md)<br />&gt;=768px</th>
                <th>Large (lg)<br />&gt;=992px</th>
                <th>Extra Large (xl)<br />&gt;=1200px</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Container width</th>
                <td>auto</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1150px</td>
              </tr>
              <tr>
                <th>Gutter width</th>
                <td>20px</td>
                <td>20px</td>
                <td>30px</td>
                <td>30px</td>
                <td>40px</td>
              </tr>
              <tr>
                <th>Outside gutter width</th>
                <td>15px</td>
                <td>15px</td>
                <td>15px</td>
                <td>15px</td>
                <td>20px</td>
              </tr>
            </tbody>
          </table>
        </Table>

        <p>
          The above is the default setting. You can customize the settings by using <a href="https://github.com/postcss/postcss">PostCSS</a>.<br />
          See <a href="https://github.com/tsuyoshiwada/lime-grid.css">README</a> for details.
        </p>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Responsive</h2>
        <p>It is a usage similar to Bootstrap and flexboxgrid in order to lower learning cost.</p>

        <Row>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box />
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box />
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={4}>
            <Box />
          </Col>
          <Col xs={12} sm={4}>
            <Box />
          </Col>
          <Col xs={12} sm={4}>
            <Box />
          </Col>
        </Row>

        <pre>
          <PrismCode className="language-html">
            {`<Container>
  <Row>
    <Col xs={12} sm={6} md={6} lg={6} xl={6} />
    <Col xs={12} sm={6} md={6} lg={6} xl={6} />
  </Row>

  {/* All breakpoints */}
  <Row>
    <Col xs={12} sm={4} md={4} lg={4} xl={4} />
    <Col xs={12} sm={4} md={4} lg={4} xl={4} />
  </Row>

  {/* Only necessary breakpoints */}
  <Row>
    <Col xs={12} sm={4} />
    <Col xs={12} sm={4} />
  </Row>
</Container>`}
          </PrismCode>
        </pre>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Always</h2>

        <Row>
          <Col xs={2}>
            <Box />
          </Col>
          <Col xs={2}>
            <Box />
          </Col>
          <Col xs={2}>
            <Box />
          </Col>
          <Col xs={2}>
            <Box />
          </Col>
          <Col xs={2}>
            <Box />
          </Col>
          <Col xs={2}>
            <Box />
          </Col>
        </Row>

        <pre>
          <PrismCode className="language-html">
            {`<Container>
  <Row>
    <Col xs={2} />
    <Col xs={2} />
    <Col xs={2} />
    ...
  </Row>
</Container>`}
          </PrismCode>
        </pre>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Auto width</h2>
        <p>The column is automatically sized according to the number of columns.</p>

        <Row>
          <Col>
            <Box />
          </Col>
          <Col>
            <Box />
          </Col>
          <Col>
            <Box />
          </Col>
        </Row>

        <pre>
          <PrismCode className="language-html">
            {`<Container>
  <Row>
    <Col />
    <Col />
    <Col />
  </Row>
</Container>`}
          </PrismCode>
        </pre>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Nesting</h2>
        <p>Supports nested grids. as well as other frameworks.</p>

        <Row>
          <Col xs={8}>
            <Box>
              <Row>
                <Col xs={8}>
                  <Box depth2>
                    <Row>
                      <Col xs={6}>
                        <Box depth3 />
                      </Col>
                      <Col xs={6}>
                        <Box depth3 />
                      </Col>
                    </Row>
                  </Box>
                </Col>
                <Col xs={4}>
                  <Box depth2 />
                </Col>
              </Row>
            </Box>
          </Col>
          <Col xs={4}>
            <Box>
              <Row>
                <Col xs={6}>
                  <Box depth2 />
                </Col>
                <Col xs={6}>
                  <Box depth2 />
                </Col>
              </Row>
            </Box>
          </Col>
        </Row>

        <pre>
          <PrismCode className="language-html">
            {`<Container>
  <Row>
    <Col xs={8}>
      <Row>
        <Col xs={8}>
          <Row>
            <Col xs={6} />
            <Col xs={6} />
          </Row>
        </Col>
        <Col xs={4} />
      </Row>
    </Col>
    <Col xs={4}>
      <Row>
        <Col xs={6} />
        <Col xs={6} />
      </Row>
    </Col>
  </Row>
</Container>`}
          </PrismCode>
        </pre>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Offsets</h2>
        <p>Offset by the specified column.</p>

        <Row>
          <Col xsOffset={11} xs={1}>
            <Box />
          </Col>
          <Col xsOffset={10} xs={2}>
            <Box />
          </Col>
          <Col xsOffset={9} xs={3}>
            <Box />
          </Col>
          <Col xsOffset={8} xs={4}>
            <Box />
          </Col>
          <Col xsOffset={7} xs={5}>
            <Box />
          </Col>
          <Col xsOffset={6} xs={6}>
            <Box />
          </Col>
          <Col xsOffset={5} xs={7}>
            <Box />
          </Col>
          <Col xsOffset={4} xs={8}>
            <Box />
          </Col>
          <Col xsOffset={3} xs={9}>
            <Box />
          </Col>
          <Col xsOffset={2} xs={10}>
            <Box />
          </Col>
          <Col xsOffset={1} xs={11}>
            <Box />
          </Col>
        </Row>

        <pre>
          <PrismCode className="language-html">
            {`<Container>
  <Row>
    <Col xsOffset={11} xs={1} />
    <Col xsOffset={10} xs={2} />
    <Col xsOffset={9} xs={3} />
    ...
  </Row>
</Container>`}
          </PrismCode>
        </pre>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Alignment</h2>
        <p>Sets the horizontal and vertical alignment position.</p>

        <h3>Start</h3>
        <Box>
          <Row start="xs">
            <Col xs={6}>
              <Box depth2 />
            </Col>
          </Row>
        </Box>
        <pre>
          <PrismCode className="language-html">
            {`<Row start="xs">
  <Col xs={6} />
</Row>`}
          </PrismCode>
        </pre>

        <h3>Center</h3>
        <Box>
          <Row center="xs">
            <Col xs={6}>
              <Box depth2 />
            </Col>
          </Row>
        </Box>
        <pre>
          <PrismCode className="language-html">
            {`<Row center="xs">
  <Col xs={6} />
</Row>`}
          </PrismCode>
        </pre>

        <h3>End</h3>
        <Box>
          <Row end="xs">
            <Col xs={6}>
              <Box depth2 />
            </Col>
          </Row>
        </Box>
        <pre>
          <PrismCode className="language-html">
            {`<Row end="xs">
  <Col xs={6} />
</Row>`}
          </PrismCode>
        </pre>

        <h3>Top</h3>
        <Box>
          <Row top="xs">
            <Col xs={6}>
              <Box depth2 lg />
            </Col>
            <Col xs={6}>
              <Box depth2 />
            </Col>
          </Row>
        </Box>
        <pre>
          <PrismCode className="language-html">
            {`<Row top="xs">
  <Col xs={6} />
  <Col xs={6} />
</Row>`}
          </PrismCode>
        </pre>

        <h3>Middle</h3>
        <Box>
          <Row middle="xs">
            <Col xs={6}>
              <Box depth2 lg />
            </Col>
            <Col xs={6}>
              <Box depth2 />
            </Col>
          </Row>
        </Box>
        <pre>
          <PrismCode className="language-html">
            {`<Row middle="xs">
  <Col xs={6} />
  <Col xs={6} />
</Row>`}
          </PrismCode>
        </pre>

        <h3>Bottom</h3>
        <Box>
          <Row bottom="xs">
            <Col xs={6}>
              <Box depth2 lg />
            </Col>
            <Col xs={6}>
              <Box depth2 />
            </Col>
          </Row>
        </Box>
        <pre>
          <PrismCode className="language-html">
            {`<Row bottom="xs">
  <Col xs={6} />
  <Col xs={6} />
</Row>`}
          </PrismCode>
        </pre>

        <h3>Example</h3>
        <Row end="xs" bottom="xs" center="md" middle="md">
          <Col xs={4}>
            <Box lg />
          </Col>
          <Col xs={4}>
            <Box />
          </Col>
        </Row>
        <pre>
          <PrismCode className="language-html">
            {`<Row end="xs" bottom="xs" center="md" middle="md">
  <Col xs={4} />
  <Col xs={4} />
</Row>`}
          </PrismCode>
        </pre>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Distribution</h2>
        <p>Set the column distribution method.</p>

        <h3>Around</h3>
        <Box>
          <Row around="xs">
            <Col xs={2}>
              <Box depth2 />
            </Col>
            <Col xs={2}>
              <Box depth2 />
            </Col>
            <Col xs={2}>
              <Box depth2 />
            </Col>
          </Row>
        </Box>
        <pre>
          <PrismCode className="language-html">
            {`<Row arond="xs">
  <Col xs={2} />
  <Col xs={2} />
  <Col xs={2} />
</Row>`}
          </PrismCode>
        </pre>

        <h3>Between</h3>
        <Box>
          <Row between="xs">
            <Col xs={2}>
              <Box depth2 />
            </Col>
            <Col xs={2}>
              <Box depth2 />
            </Col>
            <Col xs={2}>
              <Box depth2 />
            </Col>
          </Row>
        </Box>
        <pre>
          <PrismCode className="language-html">
            {`<Row between="xs">
  <Col xs={2} />
  <Col xs={2} />
  <Col xs={2} />
</Row>`}
          </PrismCode>
        </pre>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Reordering</h2>
        <p>Sets the order of columns.</p>

        <h3>First</h3>
        <Row>
          <Col>
            <Box>1</Box>
          </Col>
          <Col>
            <Box>2</Box>
          </Col>
          <Col>
            <Box>3</Box>
          </Col>
          <Col>
            <Box>4</Box>
          </Col>
          <Col>
            <Box>5</Box>
          </Col>
          <Col first="xs">
            <Box depth2>6</Box>
          </Col>
        </Row>
        <pre>
          <PrismCode className="language-html">
            {`<Row>
  <Col>1</Col>
  <Col>2</Col>
  <Col>3</Col>
  <Col>4</Col>
  <Col>5</Col>
  <Col first="xs">6</Col>
</Row>`}
          </PrismCode>
        </pre>

        <h3>Last</h3>
        <Row>
          <Col last="xs">
            <Box depth2>1</Box>
          </Col>
          <Col>
            <Box>2</Box>
          </Col>
          <Col>
            <Box>3</Box>
          </Col>
          <Col>
            <Box>4</Box>
          </Col>
          <Col>
            <Box>5</Box>
          </Col>
          <Col>
            <Box>6</Box>
          </Col>
        </Row>
        <pre>
          <PrismCode className="language-html">
            {`<Row>
  <Col last="xs">1</Col>
  <Col>2</Col>
  <Col>3</Col>
  <Col>4</Col>
  <Col>5</Col>
  <Col>6</Col>
</Row>`}
          </PrismCode>
        </pre>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Reversing</h2>
        <p>Reverse the order of the columns.</p>

        <Row reverse="xs">
          <Col xs={2}>
            <Box>1</Box>
          </Col>
          <Col xs={2}>
            <Box>2</Box>
          </Col>
          <Col xs={2}>
            <Box>3</Box>
          </Col>
          <Col xs={2}>
            <Box>4</Box>
          </Col>
          <Col xs={2}>
            <Box>5</Box>
          </Col>
          <Col xs={2}>
            <Box>6</Box>
          </Col>
        </Row>

        <pre>
          <PrismCode className="language-html">
            {`<Row reverse="xs">
  <Col xs={2}>1</Col>
  <Col xs={2}>2</Col>
  <Col xs={2}>3</Col>
  <Col xs={2}>4</Col>
  <Col xs={2}>5</Col>
  <Col xs={2}>6</Col>
</Row>`}
          </PrismCode>
        </pre>
      </Container>
    </section>

    <footer>
      <Container>
        <div><img src="./images/logo.svg" width="50" height="50" alt="React LIME GRID" /></div>
        <p>react-lime-grid licensed under MIT.<br />© react-lime-grid, 2017</p>
      </Container>
    </footer>
  </div>
);


export default App;
