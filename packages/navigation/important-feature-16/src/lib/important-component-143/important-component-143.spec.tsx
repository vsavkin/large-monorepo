import { render } from '@testing-library/react';

import ImportantComponent143 from './important-component-143';

describe('ImportantComponent143', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent143 />);
    expect(baseElement).toBeTruthy();
  });
});
