import { render } from '@testing-library/react';

import Dialog17 from './dialog17';

describe('Dialog17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog17 />);
    expect(baseElement).toBeTruthy();
  });
});
