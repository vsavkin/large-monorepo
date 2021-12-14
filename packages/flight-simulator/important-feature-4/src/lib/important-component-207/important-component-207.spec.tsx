import { render } from '@testing-library/react';

import ImportantComponent207 from './important-component-207';

describe('ImportantComponent207', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent207 />);
    expect(baseElement).toBeTruthy();
  });
});
