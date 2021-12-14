import { render } from '@testing-library/react';

import Component105 from './component105';

describe('Component105', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component105 />);
    expect(baseElement).toBeTruthy();
  });
});
