import { render } from '@testing-library/react';

import Button204 from './button204';

describe('Button204', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button204 />);
    expect(baseElement).toBeTruthy();
  });
});
