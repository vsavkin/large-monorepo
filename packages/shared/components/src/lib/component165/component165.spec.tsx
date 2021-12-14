import { render } from '@testing-library/react';

import Component165 from './component165';

describe('Component165', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component165 />);
    expect(baseElement).toBeTruthy();
  });
});
