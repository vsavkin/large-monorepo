import { render } from '@testing-library/react';

import Button76 from './button76';

describe('Button76', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button76 />);
    expect(baseElement).toBeTruthy();
  });
});
