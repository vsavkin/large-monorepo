import { render } from '@testing-library/react';

import Component199 from './component199';

describe('Component199', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component199 />);
    expect(baseElement).toBeTruthy();
  });
});
