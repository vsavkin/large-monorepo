import { render } from '@testing-library/react';

import Dialog135 from './dialog135';

describe('Dialog135', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog135 />);
    expect(baseElement).toBeTruthy();
  });
});
