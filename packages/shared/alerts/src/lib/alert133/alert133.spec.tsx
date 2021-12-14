import { render } from '@testing-library/react';

import Alert133 from './alert133';

describe('Alert133', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert133 />);
    expect(baseElement).toBeTruthy();
  });
});
