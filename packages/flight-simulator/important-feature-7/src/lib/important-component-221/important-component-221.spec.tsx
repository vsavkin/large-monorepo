import { render } from '@testing-library/react';

import ImportantComponent221 from './important-component-221';

describe('ImportantComponent221', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent221 />);
    expect(baseElement).toBeTruthy();
  });
});
