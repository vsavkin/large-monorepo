import { render } from '@testing-library/react';

import Component164 from './component164';

describe('Component164', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component164 />);
    expect(baseElement).toBeTruthy();
  });
});
