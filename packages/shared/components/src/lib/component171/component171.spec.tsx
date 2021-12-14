import { render } from '@testing-library/react';

import Component171 from './component171';

describe('Component171', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component171 />);
    expect(baseElement).toBeTruthy();
  });
});
