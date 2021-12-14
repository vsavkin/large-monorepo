import { render } from '@testing-library/react';

import Button97 from './button97';

describe('Button97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button97 />);
    expect(baseElement).toBeTruthy();
  });
});
