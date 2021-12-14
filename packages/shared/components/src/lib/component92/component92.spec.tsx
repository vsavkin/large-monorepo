import { render } from '@testing-library/react';

import Component92 from './component92';

describe('Component92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component92 />);
    expect(baseElement).toBeTruthy();
  });
});
