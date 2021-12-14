import { render } from '@testing-library/react';

import Component232 from './component232';

describe('Component232', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component232 />);
    expect(baseElement).toBeTruthy();
  });
});
