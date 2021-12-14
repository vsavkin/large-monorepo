import { render } from '@testing-library/react';

import Component130 from './component130';

describe('Component130', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component130 />);
    expect(baseElement).toBeTruthy();
  });
});
