import { render } from '@testing-library/react';

import Button72 from './button72';

describe('Button72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button72 />);
    expect(baseElement).toBeTruthy();
  });
});
