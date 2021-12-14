import { render } from '@testing-library/react';

import Component210 from './component210';

describe('Component210', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component210 />);
    expect(baseElement).toBeTruthy();
  });
});
