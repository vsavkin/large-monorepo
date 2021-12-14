import { render } from '@testing-library/react';

import Dialog231 from './dialog231';

describe('Dialog231', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog231 />);
    expect(baseElement).toBeTruthy();
  });
});
