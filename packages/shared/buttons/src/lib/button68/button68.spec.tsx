import { render } from '@testing-library/react';

import Button68 from './button68';

describe('Button68', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button68 />);
    expect(baseElement).toBeTruthy();
  });
});
