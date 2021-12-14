import { render } from '@testing-library/react';

import Dialog209 from './dialog209';

describe('Dialog209', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog209 />);
    expect(baseElement).toBeTruthy();
  });
});
