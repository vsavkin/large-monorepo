import { render } from '@testing-library/react';

import Button166 from './button166';

describe('Button166', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button166 />);
    expect(baseElement).toBeTruthy();
  });
});
