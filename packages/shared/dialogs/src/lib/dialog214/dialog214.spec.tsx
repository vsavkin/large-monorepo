import { render } from '@testing-library/react';

import Dialog214 from './dialog214';

describe('Dialog214', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog214 />);
    expect(baseElement).toBeTruthy();
  });
});
