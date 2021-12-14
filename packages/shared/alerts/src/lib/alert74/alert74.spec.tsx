import { render } from '@testing-library/react';

import Alert74 from './alert74';

describe('Alert74', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert74 />);
    expect(baseElement).toBeTruthy();
  });
});
