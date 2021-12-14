import { render } from '@testing-library/react';

import ImportantComponent37 from './important-component-37';

describe('ImportantComponent37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent37 />);
    expect(baseElement).toBeTruthy();
  });
});
