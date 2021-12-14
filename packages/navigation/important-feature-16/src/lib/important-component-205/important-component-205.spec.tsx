import { render } from '@testing-library/react';

import ImportantComponent205 from './important-component-205';

describe('ImportantComponent205', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent205 />);
    expect(baseElement).toBeTruthy();
  });
});
