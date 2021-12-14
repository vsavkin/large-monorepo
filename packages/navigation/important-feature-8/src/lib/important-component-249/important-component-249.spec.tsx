import { render } from '@testing-library/react';

import ImportantComponent249 from './important-component-249';

describe('ImportantComponent249', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent249 />);
    expect(baseElement).toBeTruthy();
  });
});
