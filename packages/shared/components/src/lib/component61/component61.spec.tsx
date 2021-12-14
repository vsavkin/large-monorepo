import { render } from '@testing-library/react';

import Component61 from './component61';

describe('Component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component61 />);
    expect(baseElement).toBeTruthy();
  });
});
