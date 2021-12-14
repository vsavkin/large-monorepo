import { render } from '@testing-library/react';

import Component170 from './component170';

describe('Component170', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component170 />);
    expect(baseElement).toBeTruthy();
  });
});
