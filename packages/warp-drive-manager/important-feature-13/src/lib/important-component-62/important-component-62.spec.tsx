import { render } from '@testing-library/react';

import ImportantComponent62 from './important-component-62';

describe('ImportantComponent62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent62 />);
    expect(baseElement).toBeTruthy();
  });
});
