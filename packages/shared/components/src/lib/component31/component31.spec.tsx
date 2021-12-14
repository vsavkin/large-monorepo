import { render } from '@testing-library/react';

import Component31 from './component31';

describe('Component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component31 />);
    expect(baseElement).toBeTruthy();
  });
});
