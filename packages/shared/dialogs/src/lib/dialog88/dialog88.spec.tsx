import { render } from '@testing-library/react';

import Dialog88 from './dialog88';

describe('Dialog88', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog88 />);
    expect(baseElement).toBeTruthy();
  });
});
