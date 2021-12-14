import { render } from '@testing-library/react';

import ImportantComponent1 from './important-component-1';

describe('ImportantComponent1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent1 />);
    expect(baseElement).toBeTruthy();
  });
});
