import { render } from '@testing-library/react';

import ImportantComponent128 from './important-component-128';

describe('ImportantComponent128', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent128 />);
    expect(baseElement).toBeTruthy();
  });
});
