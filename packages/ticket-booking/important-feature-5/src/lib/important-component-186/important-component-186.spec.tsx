import { render } from '@testing-library/react';

import ImportantComponent186 from './important-component-186';

describe('ImportantComponent186', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent186 />);
    expect(baseElement).toBeTruthy();
  });
});
