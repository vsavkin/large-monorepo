import { render } from '@testing-library/react';

import Component203 from './component203';

describe('Component203', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component203 />);
    expect(baseElement).toBeTruthy();
  });
});
