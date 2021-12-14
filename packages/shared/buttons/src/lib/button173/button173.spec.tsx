import { render } from '@testing-library/react';

import Button173 from './button173';

describe('Button173', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button173 />);
    expect(baseElement).toBeTruthy();
  });
});
