import { render } from '@testing-library/react';

import ImportantComponent195 from './important-component-195';

describe('ImportantComponent195', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent195 />);
    expect(baseElement).toBeTruthy();
  });
});
