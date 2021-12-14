import { render } from '@testing-library/react';

import Button96 from './button96';

describe('Button96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button96 />);
    expect(baseElement).toBeTruthy();
  });
});
