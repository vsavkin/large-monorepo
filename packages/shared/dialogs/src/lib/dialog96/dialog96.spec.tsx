import { render } from '@testing-library/react';

import Dialog96 from './dialog96';

describe('Dialog96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog96 />);
    expect(baseElement).toBeTruthy();
  });
});
