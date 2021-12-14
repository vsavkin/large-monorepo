import { render } from '@testing-library/react';

import Button184 from './button184';

describe('Button184', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button184 />);
    expect(baseElement).toBeTruthy();
  });
});
