import { render } from '@testing-library/react';

import Button181 from './button181';

describe('Button181', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button181 />);
    expect(baseElement).toBeTruthy();
  });
});
